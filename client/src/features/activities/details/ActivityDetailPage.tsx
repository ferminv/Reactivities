import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

export default function ActivityDetailPage() {
    // const navigate = useNavigate();
    const {id} = useParams(); //id or any param has to match the one we used on the route declared on our browser router on Routes.tsx
    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <Typography>Loading...</Typography>

    if (!activity) return <Typography>Activity not found</Typography>
  
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat />
            </Grid2>
            <Grid2 size={4}>
                <ActivityDetailsSidebar />
            </Grid2>
        </Grid2>
  )
}


    // <Card sx={{borderRadius: 3}}>
    //     <CardMedia
    //         component='img'
    //         src={`/images/categoryImages/${activity.category}.jpg`} />
    //     <CardContent>
    //         <Typography variant="h5">{activity.title}</Typography>
    //         <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
    //         <Typography variant="body1">{activity.description}</Typography>
    //     </CardContent>
    //     <CardActions>
    //         {/* MANERA VIEJA Y DOS MANERAS DE NAVEGAR CON ROUTING REACT ROUTER */}
    //         {/* <Button onClick={() => openForm(activity.id)} color="primary">Edit</Button> */}
    //         <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
    //         <Button onClick={() => navigate('/activities')} color="inherit">Cancel</Button>
    //     </CardActions>
    // </Card>