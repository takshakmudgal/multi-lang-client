import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/button";
import ReactCountryFlag from "react-country-flag";
import { PiGreaterThanBold } from "react-icons/pi";
import { Progress } from "@/components/ui/progress";

export const TestProject = () => {
  return (
    <div className="flex justify-center items-center min-h-screen sm:min-h-0 sm:h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
      <section className="w-full lg:w-2/4 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col p-6">
          <span className="font-medium text-lg items-center gap-x-2 flex">
            <GoDotFill size={30} color="#c1e3fd" /> Test Project
          </span>
          <a href="/" className="text-gray-500 text-sm mt-2">
            https://mivs.in
          </a>
        </div>
        <hr className="w-full border-t mt-4" />
        <div className="flex flex-col sm:flex-row items-center p-6 gap-4 sm:gap-0 justify-between">
          <div className="flex flex-col">
            <span className="font-medium text-lg">Translations</span>
            <span className="text-gray-500 text-sm mt-1">
              <span className="text-violet-800">39%</span> manually reviewed
              words.
            </span>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="font-medium mt-4 sm:mt-0"
          >
            Manage translations
          </Button>
        </div>
        <div className="px-6 py-4 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="UK"
            />
            <span className="font-medium">English</span>
          </div>
          <PiGreaterThanBold className="hidden sm:block" />
          <div className="flex items-center gap-4">
            <ReactCountryFlag
              countryCode="IN"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="IN"
            />
            <span className="font-medium">Hindi</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 gap-y-2 mt-4 sm:mt-0">
            <div className="flex flex-row justify-between">
              <span className="tracking-widest">15/38</span>
              <span className="text-violet-800">39%</span>
            </div>
            <Progress value={39} />
          </div>
        </div>
        <hr className="border-t mt-4 mx-6" />
        <div className="flex flex-col sm:flex-row items-center p-6 gap-4 sm:gap-0 justify-between">
          <div className="flex flex-col space-y-2">
            <span className="font-medium text-lg">Glossary</span>
            <span className="text-gray-500 text-sm">
              Set specific glossary rules to be applied to your translations.
            </span>
            <span className="text-gray-500 text-sm">
              <span className="text-violet-800">0</span> glossary rules
              configured.
            </span>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="font-medium mt-4 sm:mt-0"
          >
            Manage glossary
          </Button>
        </div>
        <hr className="border-t mt-4 mx-6" />
        <div className="flex flex-col sm:flex-row items-center p-6 gap-4 sm:gap-0 justify-between">
          <div className="flex flex-col space-y-2">
            <span className="font-medium text-lg">Translation exclusion</span>
            <span className="text-gray-500 text-sm">
              By default, everything is translated, but you can configure rules
              to exclude specific pages or blocks from translation.
            </span>
            <span className="text-gray-500 text-sm">
              You have <span className="text-violet-800">0</span> excluded URLs.
            </span>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="font-medium mt-4 sm:mt-0"
          >
            Manage exclusions
          </Button>
        </div>
      </section>
    </div>
  );
};
