const ftp = require('basic-ftp');
const log = require('fancy-log');
require('dotenv').config();

/**
 * @description Deploy files and folders to FTP using basic-ftp
 * @param {string} _input - unused (kept for API compatibility)
 * @param {string} basePath - local base path to upload from
 * @param {string} remoteDir - destination path on the FTP server
 * @param {object} params
 * @returns {Promise<void>}
 */
const deployFtp = async (_input, basePath, remoteDir, params = {}) => {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  let currentFile = '';
  client.trackProgress((info) => {
    if (info.name && info.name !== currentFile) {
      log(`[FTP] Uploading: ${info.name}`);
      currentFile = info.name;
    }
  });

  const localBase = basePath.replace(/\/\*\*$/, '').replace(/\/$/, '');

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure:
        process.env.FTP_SECURE === 'false'
          ? false
          : process.env.FTP_SECURE || true,
      secureOptions: { rejectUnauthorized: false },
    });

    log(`[FTP] Connected to ${process.env.FTP_HOST}`);
    log(`[FTP] Uploading to remote dir: /${remoteDir}`);

    await client.uploadFromDir(localBase, remoteDir);

    log('[FTP] Upload complete!');
  } catch (err) {
    log.error('[FTP] Deploy failed:', err);
    throw err;
  } finally {
    client.close();
    if (params.cb) params.cb();
  }
};

module.exports = deployFtp;
