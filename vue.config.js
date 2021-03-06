/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * This file is part of Course Project at UNAH-MM544: Reed Muller Codes.
 *
 * The underlying theoretical contents bibliography is found in the
 * BIBLIOGRAPHY.md file in the root directory of this project.
 *
 * This source code is licensed under the BSD-3-Clause License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/BSD-3-Clause.
 */

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cp-unah-mm544-reed-muller-codes/'
    : '/'
};
