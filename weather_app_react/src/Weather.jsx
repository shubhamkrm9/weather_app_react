import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Weather.css"
export default function Weather({info}){
    let initial_img=
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_img="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot_img="https://media.istockphoto.com/id/1296441088/photo/death-valley.jpg?s=2048x2048&w=is&k=20&c=lVfj3mxeEQDuFNzyRrs5x4hsulI2WkBrD7V1hFkIopg=";
    let cold_img="https://images.unsplash.com/photo-1604568430529-741cee95e99c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <>
        
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>70? rain_img:info.temp>20? hot_img:cold_img}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Temp: {info.temp}&deg;C<br></br><br></br>
                

            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Min temp: {info.tempMin}&deg;C<br></br><br></br>
                
            
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Max temp: {info.tempMax}&deg;C<br></br><br></br>

            
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Humidity: {info.humidity}<br></br><br></br>
        
            
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Weather: {info.weather}<br></br><br></br>
            
            
            </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
        </Card>
    </div>
    </> 
    );
    
}