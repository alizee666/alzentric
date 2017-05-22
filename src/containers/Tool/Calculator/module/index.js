import { tool } from 'containers/Tool/module';

const { toggleSidebar,
  closeLayer,
  openLayer,
  handleErrors,
  setErrors,
  setFormErrors,
  setLayerErrors,
  clearFormErrors,
} = tool;

export const calculator = {
  toggleSidebar,
  closeLayer,
  openLayer,
  setErrors,
  setFormErrors,
  setLayerErrors,
  clearFormErrors,
  handleErrors,
};
