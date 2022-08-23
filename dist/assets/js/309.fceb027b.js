(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{869:function(t,e,l){"use strict";l.r(e);var a=l(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"sql快速参考"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sql快速参考"}},[t._v("#")]),t._v(" SQL快速参考")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("语句")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("语法")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("AND / OR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name WHERE condition ANDIOR condition")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE (add column)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE table_name ADD column_name datatype")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE (drop column)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE table_name DROP COLUMN column_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("AS (alias for column)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name AS column_alias FROM table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("AS (alias for table)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name FROM table_name  AS table_alias")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BETWEEN")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE DATABASE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE DATABASE database_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE INDEX")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE INDEX index_name ON table_name (column_name)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE TABLE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE TABLE table_name ( column_name1 data_type, column_name2 data_type, … )")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE UNIQUE INDEX")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE UNIQUE INDEX index_name ON table_name (column_name)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE VIEW")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE FROM")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE FROM table_name (Note: Deletes the entire table!!) or DELETE FROM table_name WHERE condition")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DROP DATABASE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DROP DATABASE database_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DROP INDEX")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DROP INDEX table_name.index_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DROP TABLE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DROP TABLE table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("GROUP BY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name1,SUM(column_name2) FROM table_name GROUP BY column_name1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("HAVING")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name1,SUM(column_name2) FROM table_name GROUP BY column_name1 HAVING SUM(column_name2) condition value")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("IN")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,…)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("INSERT INTO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INSERT INTO table_name VALUES (value1, value2,…) or INSERT INTO table_name (column_name1, column_name2,…) VALUES (value1, value2,…)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("LIKE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ORDER BY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name ORDER BY column_name [ASC I DESC]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT *")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT * FROM table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT DISTINCT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT DISTINCT column_name(s) FROM table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT INTO (used to create backup copies of tables)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT * INTO new_table_name FROM original_table_name or SELECT column_name(s) INTO new_table_name FROM original_table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TRUNCATE TABLE (deletes only the data inside the table)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TRUNCATE TABLE table_name")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("UPDATE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UPDATE table_name SET column_name=new_value [, column_name=new_value] WHERE column_name=some_value")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("WHERE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SELECT column_name(s) FROM table_name WHERE condition")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);