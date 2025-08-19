// Pages
import Home from "@/app/(landing)/_home/page";
import Projects from "@/app/(landing)/_projects/page";

export default function Landing() {
  return (
    <div className="h-full w-full flex flex-col flex-nowrap overflow-y-auto">
      <Home />
      <Projects />
    </div>
  );
}
