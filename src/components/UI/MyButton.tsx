import {Button} from "@mui/material";
import {FC, ReactNode} from "react";

type propsType = {
    title: string,
    iconNode: ReactNode
}

const MyButton: FC<propsType> = ({title, iconNode}) => {


    return (
        <Button variant="contained" startIcon={iconNode}>
            {title}
        </Button>
    );
}

export default MyButton;