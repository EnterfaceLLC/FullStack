//* REACT//
import { useState } from "react";

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
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <FormControl className="p-4 border rounded-lg border-outline-300 bg-white m-3 max-w-[960px]">
      <VStack space="xl">
        <Heading className="text-typography-900 leading-3 pt-2">Login</Heading>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Email</Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Password</Text>
          <Input className="text-center">
            <InputField type={showPassword ? "text" : "password"} />
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
          <Button variant="outline" className="flex-1" onPress={() => {}}>
            <ButtonText>Sign Up</ButtonText>
          </Button>
          <Button className="flex-1" onPress={() => {}}>
            <ButtonText>Sign In</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </FormControl>
  );
}
