import React from 'react';
import MapComponent from '../../src/map/MapComponent';
import { mount } from '@cypress/react';
import maplibregl from 'maplibre-gl';

describe('MapComponent.cy.js', () => {
  beforeEach(() => {
    mount(<MapComponent />);
  });

  it('should render the map component', () => {
    cy.get('.maplibregl-canvas').should('exist');
  });
});