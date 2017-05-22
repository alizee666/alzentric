import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { intlShape } from 'react-intl';

import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Paragraph from 'grommet/components/Paragraph';

import PageHeader from 'elements/PageHeader';
import Description from 'elements/Description';
import ErrorList from 'elements/ErrorList';

import messages from './messages';

export const ToolCalculator = ({
  intl,
  isNavlogoVisible,
  toggleSidebar,
  onCalculate,
  system,
  errors,
  onChange,
}) => {
  const first = system.get('first');
  const second = system.get('second');

  return (
    <Section
      align="center"
      pad="none"
      full="horizontal"
      className="component-tool-form"
    >

      <PageHeader
        isNavlogoVisible={isNavlogoVisible}
        toggleSidebar={toggleSidebar}
        heading={intl.formatMessage(messages.calculatorTitle)}
      />


      <Box
        size="medium"
        align="center"
        pad={{ horizontal: 'small' }}
      >
        <Form>
          <div>
            <Paragraph margin="small">
              {intl.formatMessage(messages.calculatorDesc)}
            </Paragraph>

            <Description header={messages.calculator} intl={intl} />

            <FormField
              label={intl.formatMessage(messages.first)}
              error={errors.get('first')}
              htmlFor="first"
              data-testref="first"
            >
              <input
                id="first"
                name="first"
                type="text"
                data-testref="first"
                value={first}
                onChange={onChange}
              />
            </FormField>
            <FormField
              label={intl.formatMessage(messages.second)}
              error={errors.get('second')}
              htmlFor="second"
              data-testref="second"
            >
              <input
                id="second"
                name="second"
                type="text"
                value={second}
                onChange={onChange}
              />
            </FormField>

            <Box pad={{ vertical: 'medium' }}>
              <div data-testref="onCalculate">
                <Button
                  primary
                  type="submit"
                  onClick={onCalculate}
                  label={intl.formatMessage(messages.calculate)}
                />
              </div>
            </Box>
          </div>

          {errors && errors.get('messages') && <ErrorList errors={errors} />}

        </Form>
      </Box>
    </Section>
  );
};

ToolCalculator.propTypes = {
  intl: intlShape.isRequired,
  isNavlogoVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  onCalculate: PropTypes.func.isRequired,
  system: ImmutablePropTypes.mapContains({
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
  }),
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default ToolCalculator;
