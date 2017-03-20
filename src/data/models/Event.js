/**
 * Created by madow_000 on 20.03.2017.
 */
import DataType from 'sequelize';
import Model from '../sequelize';
import Quest from './Quest';
const Event = Model.define('Event', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  target: {
    type: DataType.STRING(255)
  },

  poster: {
    type: DataType.STRING(255)
  },

  quest: {
    type: DataType.STRING(255)
  },

}, {});

export default Event;
