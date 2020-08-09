class BaseModel {
  constructor(db, table) {
    this.db = db;
    this.table = table;
  }

  _find() {
    return this.db(this.table);
  }

  _findBy(filter) {
    return this.db(this.table).where(filter);
  }

  _add(data, ret_col) {
    return this.db(this.table).insert(data, ret_col);
  }

  _remove(filter) {
    return this.db(this.table).where(filter).del();
  }

  _update(filter, data) {
    return this.db(this.table).where(filter).update(data);
  }

  find() {
    return this._find();
  }

  findBy(filter) {
    return this._findBy(filter);
  }

  add(data, ret_col) {
    return this._add(data, ret_col);
  }

  remove(filter) {
    return this._remove(filter);
  }

  update(filter, data) {
    return this._update(filter, data);
  }
}

module.exports = BaseModel;
