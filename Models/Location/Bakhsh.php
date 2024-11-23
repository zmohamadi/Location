<?php

namespace Models\Location;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Bakhsh extends Model
{
    use Base;

    protected $table = 'location_bakhsh';
    protected $fillable = ['name', 'ostan', 'shahrestan', 'amar_code'];

    public function shahrestan()
    {
        return $this->belongsTo(Shahrestan::class, 'shahrestan', 'id');
    }

    public function dehestans()
    {
        return $this->hasMany(Dehestan::class, 'bakhsh', 'id');
    }

    public function shahrs()
    {
        return $this->hasMany(Shahr::class, 'bakhsh', 'id');
    }
}
