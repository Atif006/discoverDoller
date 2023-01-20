import { Menu, MenuItem } from "@mui/material";

const MenuList1 = (props) => {
  console.log(props.data);
  return (
    <Menu
      style={{ left: props.left, top: props.top }}
      anchorEl={props.condition}
      open={Boolean(props.condition)}
      onClose={() => props.onclose()}
    >
      {props.data
        ? props.data.map((value, ind) => {
            return (
              <MenuItem
                onClick={() => {
                  value.subList
                    ? props.mouse(ind, value.subList)
                    : props.mouse(null, null);
                }}
                onDoubleClick={() =>
                  props.maouseup ? props.mousemove() : null
                }
              >
                {value.name}
              </MenuItem>
            );
          })
        : null}
    </Menu>
  );
};

export default MenuList1;
