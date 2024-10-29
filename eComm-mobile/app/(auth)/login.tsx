//* REACT//
import { useState } from "react";

//* EXPO ROUTER//
import { Redirect } from "expo-router";

//* TANSTACK//
import { useMutation } from "@tanstack/react-query";

//* API//
import { login, signup } from "@/api/login";

//* ZUSTAND//
import { useAuth } from "@/store/authStore";

//* GLUESTACK//
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";

//* LUCIDE//
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

//* LOGIN SCREEN//
export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setUser = useAuth((s) => s.setUser);
  const setToken = useAuth((s) => s.setToken);
  const isLoggedIn = useAuth((s) => !!s.token);

  const loginMutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess: (data) => {
      console.log("Login Success!", data);
      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
      }
    },
    onError: () => console.log("Error"),
  });

  const signupMutation = useMutation({
    mutationFn: () => signup(email, password),
    onSuccess: (data) => {
      console.log("Login Success!", data);
      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
      }
    },
    onError: (error) => console.log("Error:", error),
  });

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  if (isLoggedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <FormControl
      isInvalid={loginMutation.error || signupMutation.error}
      className="p-4 border rounded-lg border-outline-300 bg-white m-3 max-w-[960px]"
    >
      <VStack space="xl">
        <Heading className="text-typography-900 leading-3 pt-2">Login</Heading>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Email</Text>
          <Input>
            <InputField value={email} onChangeText={setEmail} type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Password</Text>
          <Input className="text-center">
            <InputField
              value={password}
              onChangeText={setPassword}
              type={showPassword ? "text" : "password"}
            />
            <InputSlot className="pr-3" onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                className="text-darkBlue-500"
              />
            </InputSlot>
          </Input>
        </VStack>
        <HStack space="sm">
          <Button
            variant="outline"
            className="flex-1"
            onPress={() => signupMutation.mutate()}
          >
            <ButtonText>Sign Up</ButtonText>
          </Button>
          <Button className="flex-1" onPress={() => loginMutation.mutate()}>
            <ButtonText>Sign In</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </FormControl>
  );
}
