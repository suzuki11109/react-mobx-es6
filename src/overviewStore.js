import { getOverviewView } from './Document';
import { observable, action, computed } from 'mobx';

export default class OverviewStore {
  @observable documents = [];

  constructor(fetch) {
    this.fetch = fetch;
  }

  @action getDocuments() {
    return this.fetch('http://localhost:3000/documents')
      .then(action(documents => this.documents = documents));
  }

  @computed get currentPath() {
    return '/documents';
  }

  getView() {
    return getOverviewView(this);
  }
}
