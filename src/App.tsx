import { AccountCircle } from "@mui/icons-material";
import Dropdown from "./assets/components/shared/Dropdown/Dropdown";
import { Box, Typography } from "@mui/material";

function App() {
  type CustomItem = {
    id: number;
    name: string;
    icon?: React.ReactNode;
  };

  const stringItems = ["Option 1", "Option 2", "Option 3"];
  
  const customItems: CustomItem[] = [
    { id: 1, name: "Custom Item 1", icon: <AccountCircle /> },
    { id: 2, name: "Custom Item 2", icon: <AccountCircle /> },
    { id: 3, name: "Custom Item 3", icon: <AccountCircle /> },
  ];

  const handleStringChange = (value: string) => {
    console.log("Selected string:", value);
  };

  const handleCustomChange = (value: CustomItem) => {
    console.log("Selected custom item:", value);
  };

  return (
    <>
     <Dropdown<string>
      
        items={stringItems}
        onChange={handleStringChange}
        />

        <Dropdown<CustomItem>
        items={customItems}
        onChange={handleCustomChange}
        getItemLabel={(item) => String(item.id)}
        renderItemContent={(item) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {item.icon}
            <Typography>{item.name}</Typography>
          </Box>
        )}
      />
      </>
  );
}

export default App;
