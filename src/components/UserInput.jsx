import { FIELDS_LABELS } from '../util/investment.js';

/**
 * @returns UserInput component
 */
export default function UserInput() {

    function Group({ children }) {
        return (
            <div className="input-group">
                {children}
            </div>
        );
    }

    function Field({ label }) {
        return (
            <div>
                <label>{label}</label>
                <input type="number"></input>
            </div>
        );
    }

    return (
        <div className="user-input">
            <Group>
                <>
                    <Field label={FIELDS_LABELS[0]} />
                    <Field label={FIELDS_LABELS[1]} />
                </>
            </Group>
            <Group>
                <>
                    <Field label={FIELDS_LABELS[2]} />
                    <Field label={FIELDS_LABELS[3]} />
                </>
            </Group>
        </div>
    );
}