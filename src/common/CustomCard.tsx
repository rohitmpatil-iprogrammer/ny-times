import {
  alpha,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CustomCardProps {
  id: number;
  title: string;
  abstract: string;
  imageSrc: string;
  byline?: string;
}

/**
 * CustomCard component represents a card element with image, title, and abstract.
 * Clicking on the card navigates to a specific article.
 *
 * @param {number} id - The unique identifier of the card.
 * @param {string} title - The title of the card.
 * @param {string} abstract - The abstract or description of the card.
 * @param {string} imageSrc - The URL of the image to display on the card.
 * @param {string} [byline] - Optional byline text for the card.
 */
const CustomCard = ({
  id,
  title,
  abstract,
  imageSrc,
  byline,
}: CustomCardProps) => {

  /**
   * useNavigate hook from react-router-dom to handle navigation.
   * It is used to programmatically navigate to a specific route.
   */
  const router = useNavigate();

  /**
   * handleRedirection function is called when the card is clicked.
   * It prevents the default behavior of the click event.
   * Then, it uses the useNavigate hook to navigate to the specified article route.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event.
   */
  const handleRedirection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router(`/article/${id}`);
  };

  /**
   * The component returns a Card component from Material-UI.
   * It sets various styles and properties for the card display.
   * The Card component includes a CardMedia component for the image,
   * a CardContent component for the title, abstract, and optional byline,
   * and additional Typography components for the title and abstract.
   *
   * The Card component has an onClick event handler that calls the
   * handleRedirection function when the card is clicked.
   *
   * @returns {JSX.Element} The Card component.
   */
  return (
    <Card
      sx={{
        height: "100%",
        textDecoration: "none",
        maxWidth: 345,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          transition: "background-color 0.3s",
        },
      }}
      component={Link}
      onClick={handleRedirection}
      href="#"
      key={id}
    >
      <CardMedia
        component="img"
        sx={{
          height: 200,
          objectFit: "cover",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "transform 0.3s",
          },
        }}
        image={imageSrc}
        title={title}
      />
      <CardContent sx={{ minHeight: 100, maxHeight: 200, height: 180 }}>
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
    </Card>
  );
};

export default CustomCard;