import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <div className="breadcrumb-section">
      <Breadcrumb >
        <BreadcrumbItem>
          <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
            Home
          </Link>
        </BreadcrumbItem>
        {detail && (
          <BreadcrumbItem>
            <Link to="/shop" style={{ textDecoration: "none", color: "gray" }}>
              Shop
            </Link>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem active style={{ color: "black" }}>
          {current}
        </BreadcrumbItem>
      </Breadcrumb>
      {/* <h2>{current}</h2>
                <hr/> */}
    </div>
  );
};

export default SubHeader;
