import { Box, Button, ButtonGroup, List, ListItemText, Paper, Typography } from "@mui/material"
import { useStore } from "../../lib/hooks/useStore"
import { observer } from 'mobx-react-lite'

//This next so we dont have to use the observer component and simplify code
const Counter = observer(function Counter() {
    const { counterStore } = useStore()

    return (
        <Box display='flex' justifyContent='space-between'>
            <Box sx={{width: '60%'}}>
            <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
            <Typography variant="h6" gutterBottom>The count is:{counterStore.count}</Typography>
            <ButtonGroup sx={{ mt: 3 }}>
                <Button onClick={() => counterStore.decrement()} variant="contained" color="error">Decrement</Button>
                <Button onClick={() => counterStore.increment()} variant="contained" color="success">Increment</Button>
                <Button onClick={() => counterStore.increment(5)} variant="contained" color="primary">Increment by 5</Button>
            </ButtonGroup>
            </Box>
        <Paper sx={{width:'40%'}}>
            <Typography variant="h5" gutterBottom>Counter events {counterStore.eventCount}</Typography>
            <List>
                {counterStore.events.map((event, index) => (
                    <ListItemText key={index}>{event}</ListItemText>
                ))}
            </List>
        </Paper>
        </Box>
    )
})

export default Counter


// export default function Counter() {
//     const { counterStore } = useStore()

//     return (
//         //anything we put inside the observer component has the power to observe on mobx state
//         <>
//             <Observer>
//                 {() => (
//                     <>
//                         <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
//                         <Typography variant="h6" gutterBottom>The count is:{counterStore.count}</Typography>
//                     </>
//                 )}
//             </Observer>
//             <ButtonGroup sx={{mt:3}}>
//                 <Button onClick={() => counterStore.decrement()} variant="contained" color="error">Decrement</Button>
//                 <Button onClick={() => counterStore.increment()} variant="contained" color="success">Increment</Button>
//                 <Button onClick={() => counterStore.increment(5)} variant="contained" color="primary">Increment by 5</Button>
//             </ButtonGroup>
//         </>


//     )
// }