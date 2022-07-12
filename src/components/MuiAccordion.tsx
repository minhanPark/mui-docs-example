import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panelName: string) => {
    setExpanded(isExpanded ? panelName : false);
  };
  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        disableGutters
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            reiciendis aliquid ullam pariatur laboriosam minima corporis
            possimus. Quasi, eius accusamus! Et eveniet qui adipisci sed
            temporibus quae delectus voluptates aut!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        disableGutters
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            reiciendis aliquid ullam pariatur laboriosam minima corporis
            possimus. Quasi, eius accusamus! Et eveniet qui adipisci sed
            temporibus quae delectus voluptates aut!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
        disableGutters
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            reiciendis aliquid ullam pariatur laboriosam minima corporis
            possimus. Quasi, eius accusamus! Et eveniet qui adipisci sed
            temporibus quae delectus voluptates aut!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
