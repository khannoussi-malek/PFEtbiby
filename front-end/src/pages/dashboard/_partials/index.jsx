import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { useHistory } from "react-router-dom";

export const NavBreadcrumb = ({ path }, props: BreadcrumbProps) => {
  let history = useHistory();
  let patharray = path.split("/");
  patharray.shift();

  return (
    <Breadcrumb
      fontSize="lg"
      {...props}
      separator={
        <Box
          as={HiChevronRight}
          color="gray.400"
          fontSize="md"
          top="2px"
          pos="relative"
        />
      }
    >
      {patharray.map((url) => (
        <BreadcrumbItem color="inherit" key={url}>
          <BreadcrumbLink
            onClick={() => {
              url != "dashboard"
                ? history.push(url)
                : history.push("/dashboard");
            }}
          >
            {url.charAt(0).toUpperCase() + url.slice(1)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
