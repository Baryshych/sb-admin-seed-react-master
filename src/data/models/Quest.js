/**
 * Created by madow_000 on 20.03.2017.
 */
import DataType from 'sequelize';
import Model from '../sequelize';

const Quest = Model.define('Quest', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  target: {
    type: DataType.STRING(255)
  },

  type: {
    type: DataType.STRING(255)
  },

  completed: {
    type: DataType.STRING(255)
  },

}, {});

export default Quest;
