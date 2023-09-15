import del from "del";
export const reset = () => {
	return del(app.path.clean);
}
import pkg from 'del';
const { deleteAsync } = pkg;
