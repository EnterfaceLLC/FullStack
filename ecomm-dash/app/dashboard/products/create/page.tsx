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

//* NEXTJS//
import { useSearchParams } from "next/navigation";

//* ACTION//
import { createProduct } from "./actions";

export default function CreateProductPage(params: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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
            Create New Product
          </Heading>
          <VStack space="xs">
            <Text className="text-typography-500 leading-1">Name</Text>
            <Input>
              <InputField value={name} onChangeText={setName} type="text" />
            </Input>
          </VStack>

          <VStack space="xs">
            <Text className="text-typography-500 leading-1">Description</Text>
            <Input>
              <InputField
                value={description}
                onChangeText={setDescription}
                type="text"
              />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500 leading-1">Price</Text>
            <Input>
              <InputField value={price} onChangeText={setPrice} type="text" />
            </Input>
          </VStack>
          {errorMessage && (
            <Text className="color-red-600">{errorMessage}</Text>
          )}

          <Button
            className="bg-teal-900"
            onPress={() => createProduct(name, description, Number(price))}
          >
            <ButtonText>Create Product</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}
