import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "./store/configureStore";

const mapState = (state: RootState) => ({
  data: state.test.data,
});

const connector = connect(mapState)

interface Props extends ConnectedProps<typeof connector> {

}

const SimpleComponent: FC<Props> = ({ data }) => {
  return <div>Redux Test Value: {data}</div>;
};

export default connector(SimpleComponent);
