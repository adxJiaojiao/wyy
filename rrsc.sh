#!/bin/bash
target=("data/tpl/app/ewei_shopv2/plugin/diypage/default/mobile/diypage.tpl.php" "addons/ewei_shopv2/template/mobile/default/store/selector.html" "addons/ewei_shopv2/template/mobile/default/order/create.html" "addons/ewei_shopv2/template/mobile/default/order/pay/success.html" "addons/ewei_shopv2/template/mobile/default/goods/detail.html" "addons/ewei_shopv2/plugin/groups/template/mobile/default/orders/confirm.html" "addons/ewei_shopv2/plugin/groups/template/mobile/default/orders/detail.html"  "addons/ewei_shopv2/plugin/merch/template/mobile/default/list/merchuser.html" "addons/ewei_shopv2/plugin/diypage/template/mobile/default/index.html" "addons/ewei_shopv2/plugin/diypage/template/mobile/default/template/tpl_detail_store.html" "addons/ewei_shopv2/plugin/article/template/mobile/default/index.html" "addons/ewei_shopv2/plugin/creditshop/template/mobile/default/create.html" "addons/ewei_shopv2/plugin/creditshop/template/mobile/default/log_detail.html" "addons/ewei_shopv2/plugin/cycelbuy/template/mobile/default/order/create.html"  "addons/ewei_shopv2/plugin/cycelbuy/template/mobile/default/goods/detail.html"  "addons/ewei_shopv2/static/js/app/biz/store/selector.js")
for i in ${target[@]};
do 
	sed -i 's#RS5Gchb5UZv0pNA1Z64sEFdPl1xuSYmP#5isIGenHv2Q0PHTyDVqG6CGBryhP7P1v#g' $i
done
