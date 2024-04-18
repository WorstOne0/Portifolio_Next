import { Card } from "@/components";

export default function NavBar() {
  return (
    <div className="h-screen w-[10rem] p-5 bg-[var(--background-dark)]">
      <Card elevation={1}>
        <div className="h-full flex flex-col text-white">
          {/* Top */}
          <div className="h-[16rem] flex flex-col justify-center items-center">TOP</div>
          {/* Main */}
          <div className="grow flex flex-col justify-center items-center">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          {/* Bottom */}
          <div className="h-[16rem] flex flex-col justify-center items-center">BT</div>
        </div>
      </Card>
    </div>
  );
}
