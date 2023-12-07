import { H1 } from "@/Components/common/Headings";
import Main from "@/Components/common/Main";
import ContactUs from "@/Components/contact/ContactUs";

export default function Page() {
  return (
    <Main>
      <H1 className={"text-center"}>Contact Us</H1>
      <div className="my-16">
        <ContactUs />
      </div>
    </Main>
  );
}
