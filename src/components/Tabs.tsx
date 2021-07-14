import React, { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  children: React.ReactElement[];
}
const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabWidth = 100 / children.length;
  return (
    <div className="font-sans">
      <div className="pb-1 bg-primary-100">
        <div className="relative max-w-md mx-auto">
          <div className="flex text-xl font-bold">
            {children.map((child, index) => (
              <div
                className="flex-1 px-2 py-4 text-center cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                {child.props.title}
                <span className="text-xs text-gold">★</span>
              </div>
            ))}
          </div>
          <div
            className="absolute h-1 ease-in-out duration-300 bg-primary-400"
            style={{
              width: tabWidth + "%",
              left: tabWidth * selectedIndex + "%",
            }}
          ></div>
        </div>
      </div>
      <div className="relative bg-primary-200">
        {children.map((child, index) => (
          <Transition
            as={Fragment}
            show={index === selectedIndex}
            enter="transition-opacity duration-300"
            enterFrom="opacity-100"
            enterTo="opacity-100"
            entered="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-100"
          >
            <div className="absolute text-center top-0 left-0 right-0 px-2 py-4 bg-primary-200">
              {child}
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

Tabs.defaultProps = {};
export default Tabs;
