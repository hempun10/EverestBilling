import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MainNav from "./MainNav";
import NavActions from "./NavActions";

export function TabletNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Menu</Button>
      </SheetTrigger>
      <SheetContent className=" flex flex-col justify-around">
        <MainNav />
        <NavActions />
      </SheetContent>
    </Sheet>
  );
}
