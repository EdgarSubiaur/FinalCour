// Main.test.js

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Main from './Main';
import { fetchData } from './Api';

// Simula la función fetchData de la API
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Main component', () => {
  // Antes de cada prueba, simulamos que fetchData devuelve horarios predeterminados
  beforeEach(() => {
    // Simulamos que la API devuelve una lista de horarios
    fetchData.mockResolvedValue(['17:00', '18:00', '19:00']);
  });

  test('initializeTimes should fetch available times on load', async () => {
    render(<Main />);

    // Verifica que los horarios estén disponibles después de que se renderice el componente
    await waitFor(() => expect(screen.getByText('17:00')).toBeInTheDocument());
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
  });

  test('updateTimes should fetch available times for selected date', async () => {
    // Simulamos que fetchData devuelve horarios diferentes para una nueva fecha
    fetchData.mockResolvedValueOnce(['20:00', '21:00', '22:00']);

    render(<Main />);

    // Simula la selección de una nueva fecha
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2024-11-28' } });

    // Espera a que los horarios actualizados estén disponibles
    await waitFor(() => expect(screen.getByText('20:00')).toBeInTheDocument());
    expect(screen.getByText('21:00')).toBeInTheDocument();
    expect(screen.getByText('22:00')).toBeInTheDocument();
  });

  test('should show loading indicator while fetching times', async () => {
    // Simulamos que fetchData tarda en responder
    fetchData.mockImplementationOnce(() => new Promise(resolve => setTimeout(() => resolve(['17:00', '18:00', '19:00']), 1000)));

    render(<Main />);

    // Verifica que se muestra el texto de carga
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Espera que los horarios se carguen después de la promesa
    await waitFor(() => expect(screen.getByText('17:00')).toBeInTheDocument());
  });

  test('should handle error when fetching times fails', async () => {
    // Simulamos que fetchData falla
    fetchData.mockRejectedValueOnce(new Error('Error fetching data'));

    render(<Main />);

    // Verifica que se muestre el mensaje de error
    await waitFor(() => expect(screen.getByText('Error al cargar horarios')).toBeInTheDocument());
  });
});
