import React from 'react';
import {render} from '@testing-library/react-native';
import {fireEvent} from '@testing-library/react-native';
import Header from '../index';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Header Component', () => {
  it('renders the Header component with the correct title', () => {
    const {getByText} = render(<Header title="Movies App" />);
    const titleElement = getByText('Movies App');
    expect(titleElement).toBeTruthy();
  });

  it('renders the back button when canGoBack is true', () => {
    const mockGoBack = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({goBack: mockGoBack});

    const {getByText} = render(<Header title="Movies App" canGoBack={true} />);
    const backButton = getByText('BACK');
    expect(backButton).toBeTruthy();

    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('does not render the back button when canGoBack is false', () => {
    const {queryByText} = render(
      <Header title="Movies App" canGoBack={false} />,
    );
    const backButton = queryByText('BACK');
    expect(backButton).toBeNull();
  });
});
