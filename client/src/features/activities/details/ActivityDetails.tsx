import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetails() {
    const navigate = useNavigate();
    const {id} = useParams(); //id or any param has to match the one we used on the route declared on our browser router on Routes.tsx
    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <Typography>Loading...</Typography>

    if (!activity) return <Typography>Activity not found</Typography>
  
    return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia
            component='img'
            src={`/images/categoryImages/${activity.category}.jpg`} />
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
            <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
        <CardActions>
            {/* MANERA VIEJA Y DOS MANERAS DE NAVEGAR CON ROUTING REACT ROUTER */}
            {/* <Button onClick={() => openForm(activity.id)} color="primary">Edit</Button> */}
            <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
            <Button onClick={() => navigate('/activities')} color="inherit">Cancel</Button>
        </CardActions>
    </Card>
  )
}