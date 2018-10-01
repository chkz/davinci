/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import line from './line'
import bar from './bar'
import scatter from './scatter'
import pie from './pie'
import area from './area'
import funnel from './funnel'
import map from './map'
import radar from './radar'
import wordCloud from './wordCloud'
import { EChartOption } from 'echarts'
import { IChartProps } from '../../components/Chart'

export default function (type, chartProps: IChartProps): EChartOption {
  switch (type) {
    case 'line': return line(chartProps)
    case 'bar': return bar(chartProps)
    case 'scatter': return scatter(chartProps)
    case 'pie': return pie(chartProps)
    case 'area': return area(chartProps)
    case 'funnel': return funnel(chartProps)
    case 'map': return map(chartProps)
    case 'radar': return radar(chartProps)
    case 'wordCloud': return wordCloud(chartProps)
  }
}
