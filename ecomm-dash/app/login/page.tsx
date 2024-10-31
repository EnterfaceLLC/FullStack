"use client";

//* REACT//
import { useState } from "react";

//* GLUESTACK//
import { Box } from "@/components/ui/box";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";

//* ACTIONS//
import { handleLogin, handleSignup } from "./actions";

//* NEXTJS//
import { useSearchParams } from "next/navigation";

//* LOGIN PAGE//
export default function LoginPage(params: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("errorMessage");

  return (
    <Box className="flex-1 justify-center items-center min-h-screen">
      <FormControl
        isInvalid={!!errorMessage}
        className="p-4 border rounded-lg border-outline-300 bg-white m-3 max-w-[500px] w-full"
      >
        <VStack space="xl">
          <Heading className="text-typography-900 leading-3 pt-2">
            Login
          </Heading>
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
                type={"password"}
              />
            </Input>
          </VStack>
          {errorMessage && (
            <Text className="color-red-600">{errorMessage}</Text>
          )}
          <HStack space="sm">
            <Button
              variant="outline"
              className="flex-1"
              onPress={() => handleSignup(email, password)}
            >
              <ButtonText>Sign Up</ButtonText>
            </Button>
            <Button
              className="flex-1  bg-teal-900"
              onPress={() => handleLogin(email, password)}
            >
              <ButtonText>Sign In</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </FormControl>
    </Box>
  );
}
