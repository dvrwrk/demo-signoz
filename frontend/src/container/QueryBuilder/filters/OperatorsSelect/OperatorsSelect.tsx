import { Select } from 'antd';
import React, { memo } from 'react';
// ** Types
import { SelectOption } from 'types/common/select';
// ** Helpers
import { transformToUpperCase } from 'utils/transformToUpperCase';

import { OperatorsSelectProps } from './OperatorsSelect.interfaces';

export const OperatorsSelect = memo(function OperatorsSelect({
	operators,
	value,
	onChange,
	...props
}: OperatorsSelectProps): JSX.Element {
	const operatorsOptions: SelectOption<string, string>[] = operators.map(
		(operator) => ({
			label: transformToUpperCase(operator),
			value: operator,
		}),
	);

	return (
		<Select
			options={operatorsOptions}
			value={value}
			onChange={onChange}
			style={{ width: '100%' }}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	);
});
