import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import Community from "@/app/(mainsite)/components/homepage/Community/Community";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import HorizontalFreeQuoteForm from "@/app/(mainsite)/components/homepage/HorizontalFreeQuoteForm/HorizontalFreeQuoteForm";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";


export default function Home() {
  return (
    <>
      <Header />
      <HorizontalFreeQuoteForm />
      <AboutUs />
      <InlineReviews />
      <StatsRibbon />
      <Services />
      <ServiceArea />
      <Community />
    </>
  )
}
