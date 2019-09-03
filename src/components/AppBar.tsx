import React from "react";
import { Menu as MenuIcon } from '@material-ui/icons';


import {
    Toolbar,
    IconButton,
    Typography,
    Button,
    AppBar,
    Drawer,
    List,
    ListItemIcon,
    ListItem,
    ListItemText,
    Divider,
} from "@material-ui/core";

export default function ButtonAppBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side: string, open: boolean) => (event: any) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (side: string) => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >

        </div>
    );

    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Button onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
                    <Drawer
                        open={state.left}
                        onClose={toggleDrawer("left", false)}
                    >
                        {sideList("left")}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// const NavigationBar = styled(App)
