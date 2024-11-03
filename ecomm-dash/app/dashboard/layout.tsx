//* NEXTJS//
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";

//* GLUESTACK//
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Icon, MenuIcon, StarIcon, ThreeDotsIcon } from "@/components/ui/icon";

//* LUCIDE//
import { HomeIcon } from "lucide-react-native";

//* TYPE//
type DashboardLayoutProps = {
  children: React.ReactNode;
};

//* DASHBOARD LAYOUT//
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const token = cookies().get("token")?.value;

  if (!token) {
    return redirect("/login");
  }

  return (
    <div className="h-screen overflow-y-hidden">
      <Header />
      <HStack className="h-full">
        <Sidebar />
        <Box className="flex-1 overflow-y-auto bg-gray-100 p-3">{children}</Box>
      </HStack>
      <MobileNavbar />
    </div>
  );
}

function Header(params: any) {
  return (
    <HStack className="p-5 border-b justify-between items-center">
      <Heading>.Enterface Shop</Heading>
      <Avatar>
        <AvatarFallbackText>E</AvatarFallbackText>
      </Avatar>
    </HStack>
  );
}

function Sidebar(params: any) {
  return (
    <VStack className="p-3 gap-3 pr-10 border-r hidden md:flex">
      <Link href={"/dashboard"}>
        <Text>Dashboard</Text>
      </Link>

      <Link href={"/dashboard/products"}>
        <Text>Products</Text>
      </Link>

      <Link href={"/dashboard/orders"}>
        <Text>Orders</Text>
      </Link>
    </VStack>
  );
}

function MobileNavbar(params: any) {
  return (
    <HStack className="p-3 gap-3 pr-10 border-t absolute bottom-0 right-0 left-0 bg-gray-500 justify-between md:hidden">
      <Link href={"/dashboard"}>
        <Icon as={MenuIcon} />
      </Link>

      <Link href={"/dashboard/products"}>
        <Icon as={StarIcon} />
      </Link>

      <Link href={"/dashboard/orders"}>
        <Icon as={ThreeDotsIcon} />
      </Link>
    </HStack>
  );
}
