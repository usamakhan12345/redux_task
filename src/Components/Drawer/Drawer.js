import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from  "../AlignItemList/List"
export default function TemporaryDrawer({ open ,setOpen  , Addtocart}) {
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={open}
          onClose={() =>setOpen(false)}
          >

        <Box
          role = "presentation"
           
          >
            <List Addtocart={Addtocart}/>
    </Box>

          </Drawer>
      </React.Fragment>
    </div>
  );
}