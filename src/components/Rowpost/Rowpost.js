import React, { useEffect, useState } from 'react';
import './Rowpost.css';
import axios from '../../axios';
import { apiKey, imageUrl } from '../../constants/constants';
import Youtube from 'react-youtube';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Rowpost(props) {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [movies, setMovies] = useState([]);
    const [snack, setSnack] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log('calliooooo');
        axios.get(props.url).then((res) => {
            if (res) {
                setLoading(false);
            }
            setMovies(res.data.results);
        });
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnack(false);
    };

    const handleMovie = (id) => {
        axios
            .get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`)
            .then((res) => {
                if (res.data.results.length !== 0) {
                    const num = Math.floor(
                        Math.random() * res.data.results.length
                    );
                    setUrlId(res.data.results[num]);
                } else {
                    setSnack(true);
                }
            });
    };

    const [urlId, setUrlId] = useState();
    // const []

    return (
        <div className="row">
            {loading && (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress color="error" />
                </Box>
            )}
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((obj) => (
                    <img
                        onClick={() => {
                            handleMovie(obj.id);
                        }}
                        className={props.isSmall ? 'small-poster' : 'poster'}
                        alt="poster"
                        src={`${imageUrl + obj.backdrop_path}`}
                    />
                ))}
            </div>
            {urlId && <Youtube videoId={urlId.key} opts={opts}></Youtube>}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snack}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    This video Unavailable!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Rowpost;
