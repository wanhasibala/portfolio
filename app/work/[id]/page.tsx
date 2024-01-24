import Navbar from "@/components/navbar";
import Header from "./header";
import ClientBrief from "./clientbrief";
import BodyProject from "./bodyproject";

export default function Page({ params }: { params: { id: string } }) {
    return(
        <div className="m-8">
            <Navbar />

            <Header />
            <ClientBrief />
            <BodyProject />
        </div>
    ) 
    
  }

