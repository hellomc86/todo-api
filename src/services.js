const queryInstance = require('./queryClass');
const schema = require('./schema');

const STATUS = require('./statusConst');

const date = () => new Date();

const get = async (filter = {}) => await queryInstance.get(schema, filter);

const add = async (data) => await queryInstance.add(schema, {
    ...data,
    created_date: date(),
    updated_date: date(),
});

const update = async (id, data) => await queryInstance.modify(schema, id, {
    ...data,
    updated_date: date(),
});

const remove = async (id) => 
{
    console.log(id); 
    await queryInstance.remove(schema, id);
}

module.exports = {
    get,
    add,
    update,
    remove,
};