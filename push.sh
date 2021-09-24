###
 # @Descripttion: 
 # @Author: 林舒恒
 # @Date: 2021-09-24 21:09:57
 # @LastEditors: 林舒恒
 # @LastEditTime: 2021-09-24 21:12:26
###
nowTime=`date +%F`
eval "git add ."
eval "git commit -m ${nowTime}"
eval "git push origin master"