import { AccountCircle } from "@mui/icons-material";
import Dropdown from "./assets/components/shared/Dropdown/Dropdown";
import { Box, Typography } from "@mui/material";
import logo from "../src/assets/fightModeDarkBlueBackground.jpeg"

function App() {
  type CustomItem = {
    id: string;
    label: string;
    icon?: string;
    additionalData?: string;
  };

  // Transform string items into objects with id and label properties
  const stringItems = ["Option 1", "Option 2", "Option 3"].map((label, index) => ({
    id: index.toString(),
    label,
  }));

  const customItems: CustomItem[] = [
    { id: "1", label: "Custom Item 1", icon: logo },
    { id: "2", label: "Custom Item 2", icon: "C:/Users/who/Desktop/Skills/05 - Pokedex/pokedex/src/assets/fightModeDarkBlueBackground.jpeg" },
    { id: "3", label: "Custom Item 3",icon: "../../asd", additionalData: "asd" },
  ];

  const handleStringChange = (value: { id: string; label: string } | null) => {
    console.log("Selected string:", value?.label);
  };

  const handleCustomChange = (value: CustomItem | null) => {
    console.log("Selected custom item:", value);
  };

  return (
    <>
      {/* Dropdown for string items */}
      <Dropdown
        items={stringItems}
        onChange={handleStringChange}
      />

      {/* Dropdown for custom items */}
      <Dropdown
        items={customItems}
        onChange={handleCustomChange}
      />
    </>
  );
}

export default App;
