import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const navigate = useNavigate();

  return (
    <Breadcrumb>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            () => console.log('Link clicked:', routeTo)
            event.preventDefault();
            if (routeTo !== location.pathname) {
            navigate(routeTo);
            }
        };

        return isLast ? (
          <Breadcrumb.Item key={name} active>
            {name}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={name} as={Link} to={routeTo} onClick={handleClick}>
            {name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;