import React from 'react';
import { render } from '@testing-library/react';
import DataDisplay from '../airqualityindex/DataDisplay';

describe('DataDisplay', () => {
  it('should render correctly with props', () => {
    const dataname = 'NO';
    const data = '2';
    const { container } = render(<DataDisplay dataname={dataname} data={data} />);
    
    expect(container).toMatchSnapshot();
  });
});
