import { Link } from "react-router-dom";
import {
  alpha,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CustomCardProps {
  id: number;
  title: string;
  abstract: string;
  imageSrc: string;
  byline?: string;
  url?: string;
}

const CustomCard = ({
  id,
  title,
  abstract,
  imageSrc,
  byline,
  url,
}: CustomCardProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: 345,
        cursor: url ? "pointer" : "default",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          transition: "background-color 0.3s",
        },
      }}
      key={id}
    >
      <Link
      className="Card-link"
        to={`/article/${id}`}
        style={{ cursor: "pointer"  }}
      >
        <CardMedia
          component="img"
          sx={{
            height:  200,
            objectFit: "cover",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s",
            },
          }}
          image={imageSrc}
          title={title}
        />
        <CardContent
          sx={{ minHeight: 100, maxHeight: 200, height: 180 }}
        >
          {byline && (
            <Typography
              sx={{
                lineHeight: 1.5,
                color: () => alpha("#000", 0.7),
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              {byline}
            </Typography>
          )}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              lineHeight: 1.5,
              fontWeight: "bold",
              color: () => alpha("#000", 0.7),
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {abstract}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CustomCard;
