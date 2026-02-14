import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRef, useState, useCallback } from "react";
import { Coffee } from "lucide-react";

export const Floating = () => {
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const dragRef = useRef<{
    isDragging: boolean;
    startX: number;
    startY: number;
    startPosX: number;
    startPosY: number;
  }>({
    isDragging: false,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
  });
  const wasDragged = useRef(false);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragRef.current = {
        isDragging: true,
        startX: e.clientX,
        startY: e.clientY,
        startPosX: position.x,
        startPosY: position.y,
      };
      wasDragged.current = false;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [position],
  );

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      wasDragged.current = true;
    }
    setPosition({
      x: Math.max(0, dragRef.current.startPosX - dx),
      y: Math.max(0, dragRef.current.startPosY - dy),
    });
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    dragRef.current.isDragging = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed rounded-full cursor-grab active:cursor-grabbing select-none touch-none"
          style={{ right: position.x, bottom: position.y }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={(e) => {
            if (wasDragged.current) e.preventDefault();
          }}
        >
          <Coffee size={64} className="p-2.5 text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="left" dir="ltr" className="bg-white">
        <div className="space-y-4">
          <h2>Just a coffee icon with some action suggestions:</h2>
          <ul className="space-y-2">
            <li>
              <Button onClick={() => window.print()} className="w-full">
                print
              </Button>
            </li>
            <li>
              <Button
                className="bg-red-500 w-full"
                onClick={() => history.back()}
              >
                Back
              </Button>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};
