import { Card, CardActions, CardContent } from "@mui/material"
import { ReactNode } from "react";
import styles from '../../App.module.css';

type Props = {
    content: ReactNode;
    actions: ReactNode;
  }

const CardInformation= ({content: children, actions}: Props) => {
    return (
        <Card className={`${styles.cardStyle}`}>
            <CardContent>
                {children}
            </CardContent>
            <CardActions>
                {actions}
            </CardActions>
        </Card>

    );

}


export default CardInformation;