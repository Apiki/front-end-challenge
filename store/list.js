export const state = () => ({
  products: [],
  db: '',
  dbName: 'myListProductsDB',
  storeName: 'products'
})

export const mutations = {
  update_state(state, values) {
    Object.keys(values).forEach(key => {
      state[key] = values[key]
    })
  },
  add_product(state, { obj_prod }) {
    state.products.push(obj_prod)
  },
  edit_productQtd(state, { obj }) {
    const { id, quantidade, valortotal } = obj
    const indexProd = state.products.findIndex((prod) => prod.id === id)
    if (indexProd < 0) return
    const price = state.products[indexProd].preco
    state.products[indexProd].quantidade = quantidade
    state.products[indexProd].valortotal = valortotal
  },
  edit_productPrice(state, { obj }) {
    const { id, preco, valortotal } = obj
    const indexProd = state.products.findIndex((prod) => prod.id === id)
    if (indexProd < 0) return
    const quantidade = state.products[indexProd].quantidade
    state.products[indexProd].preco = preco
    state.products[indexProd].valortotal = valortotal
  },
  edit_productStage(state, { obj }) {
    const { id, pego } = obj
    const indexProd = state.products.findIndex((prod) => prod.id === id)
    if (indexProd < 0) return
    state.products[indexProd].pego = pego
  },
  removeProd(state, { id }) {
    const indexProd = state.products.findIndex((prod) => prod.id === id)
    if (indexProd < 0) return
    state.products.splice(indexProd, 1)
  }
}

export const actions = {
  creatIndexedDB({ dispatch, commit, state }, { }) {
    let db;
    //const dbName = 'myListProductsDB',
    //  storeName = 'products';
    const dbName = state.dbName
    const storeName = state.storeName
    if (window.indexedDB) {
      const request = window.indexedDB.open(dbName, 1)

      request.onsuccess = (e) => {
        db = request.result
        commit('update_state', { db })
        dispatch('loadProds', { db })
      }

      request.onerror = (e) => {
        console.log('on error', e)
      }

      request.onupgradeneeded = (e) => {
        db = request.result
        commit('update_state', { db })

        const objectStoreLocation = db.createObjectStore(storeName, {
          keyPath: 'id',
          autoIncrement: true
        })
        objectStoreLocation.createIndex('nome', 'nome', { unique: false })
        objectStoreLocation.createIndex('pego', 'pego', { unique: false })
        objectStoreLocation.createIndex('preco', 'preco', { unique: false })
        objectStoreLocation.createIndex('quantidade', 'quantidade', { unique: false })
        objectStoreLocation.createIndex('valortotal', 'valortotal', { unique: false })

        console.log('on upgraded', e)
      }
    } else {
      console.log('não suporta indexedDB')
    }
  },
  loadProds({ commit, state }, { db }) {
    const storeName = state.storeName
    const products = state.products
    let objectStore = db.transaction(storeName).objectStore(storeName)
    objectStore.openCursor().onsuccess = (e) => {
      const cursor = e.target.result
      
      if(cursor) {
        const obj_prod = cursor.value
        const { id } =  obj_prod
        const hasProd = products.filter((p) => p.id === id)
        if(hasProd.length < 1) {
          commit('add_product', { obj_prod })
        }
        cursor.continue()
      }
    }
  },
  action_addProduct({ commit, state }, { obj_prod }) {
    const db = state.db
    const storeName = state.storeName

    const transactionAdd = db.transaction([storeName], 'readwrite')
    const objectStore = transactionAdd.objectStore(storeName)
    const request = objectStore.add(obj_prod)

    transactionAdd.oncomplete = (e) => {
      commit('add_product', { obj_prod })
    }
    transactionAdd.onerror = (e) => {
      console.log('transação falhou', e)
    }
  },
  action_editQtdProd({ commit, state }, { obj_prod }){
    const db = state.db
    const storeName = state.storeName
    const { id, quantidade } = obj_prod

    const transactionEdit = db.transaction([storeName], "readwrite");
    const objectStore = transactionEdit.objectStore(storeName)
    const request = objectStore.get(id)

    request.onerror = function (event) {
      console.log('Ocorreu um erro ao buscar o contato.');
    }
    request.onsuccess = function (event) {
      let prod = event.target.result
      prod.quantidade = quantidade
      const { preco } = prod
      const total = (preco * quantidade).toFixed(2)
      prod.valortotal = total
      const productObj = {
        id: id,
        quantidade: quantidade,
        valortotal: total
      }
      const requestUpdate = objectStore.put(prod)

      requestUpdate.onsuccess = function (event) {
        commit('edit_productQtd', { obj: productObj })
        console.log('produto editado', event)
      }
      requestUpdate.onerror = function (event) {
        console.log('Ocorreu um erro ao salvar o contato.', event);
      }
    }
  },
  action_editPriceProd({ commit, state }, { obj_prod }){
    const db = state.db
    const storeName = state.storeName
    const { id, preco } = obj_prod

    const transactionEdit = db.transaction([storeName], "readwrite");
    const objectStore = transactionEdit.objectStore(storeName)
    const request = objectStore.get(id)

    request.onerror = function (event) {
      console.log('Ocorreu um erro ao buscar o contato.');
    }
    request.onsuccess = function (event) {
      let prod = event.target.result
      prod.preco = preco
      const { quantidade } = prod
      const total = (preco * quantidade).toFixed(2)
      prod.valortotal = total
      const productObj = {
        id: id,
        preco: preco,
        valortotal: total
      }
      const requestUpdate = objectStore.put(prod)

      requestUpdate.onsuccess = function (event) {
        commit('edit_productPrice', { obj: productObj })
        console.log('produto editado', event)
      }
      requestUpdate.onerror = function (event) {
        console.log('Ocorreu um erro ao salvar o contato.', event);
      }
    }
  },
  action_changeStatusProd({ commit, state }, { obj_prod }){
    const db = state.db
    const storeName = state.storeName
    const { id, pego } = obj_prod

    const transactionEdit = db.transaction([storeName], "readwrite");
    const objectStore = transactionEdit.objectStore(storeName)
    const request = objectStore.get(id)

    request.onerror = function (event) {
      console.log('Ocorreu um erro ao buscar o contato.');
    }
    request.onsuccess = function (event) {
      let prod = event.target.result
      prod.pego = pego
      const productObj = {
        id: id,
        pego: pego
      }
      const requestUpdate = objectStore.put(prod)

      requestUpdate.onsuccess = function (event) {
        commit('edit_productStage', { obj: productObj })
        console.log('produto editado', event)
      }
      requestUpdate.onerror = function (event) {
        console.log('Ocorreu um erro ao salvar o contato.', event);
      }
    }
  },
  actions_removeProd({ commit, state }, { id }){
    const db = state.db
    const storeName = state.storeName
    const transactionRmm = db.transaction([storeName], 'readwrite')
    const objectStore = transactionRmm.objectStore(storeName)
    const request = objectStore.delete(id)
    transactionRmm.oncomplete = (e) => {
      commit('removeProd', { id })
    }
  }
}